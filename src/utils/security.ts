/**
 * 보안 유틸리티 함수
 * XSS 방지, 입력값 검증, 안전한 로깅 등을 제공합니다.
 */

/**
 * HTML 태그 및 스크립트를 제거하여 XSS 공격 방지
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * 이메일 형식 검증
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 날짜 형식 검증 (YYYY-MM-DD)
 */
export function isValidDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * 숫자만 포함하는지 검증
 */
export function isNumeric(value: string | number): boolean {
  if (typeof value === 'number') return !isNaN(value);
  return /^\d+$/.test(value);
}

/**
 * 문자열 길이 검증
 */
export function isValidLength(
  value: string,
  min: number,
  max: number
): boolean {
  const length = value.trim().length;
  return length >= min && length <= max;
}

/**
 * SQL Injection 방지를 위한 특수문자 검증
 */
export function containsSqlInjection(input: string): boolean {
  const sqlKeywords = [
    'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'CREATE', 'ALTER',
    'EXEC', 'EXECUTE', 'UNION', 'SCRIPT', '--', ';--', '/*', '*/', 'xp_'
  ];
  
  const upperInput = input.toUpperCase();
  return sqlKeywords.some(keyword => upperInput.includes(keyword));
}

/**
 * 안전한 정수 파싱
 */
export function safeParseInt(value: string | number, defaultValue = 0): number {
  if (typeof value === 'number') return Math.floor(value);
  
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * 환경변수에 따른 안전한 로깅
 * 프로덕션 환경에서는 console.log를 비활성화합니다.
 */
export const logger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
  },
  
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(...args);
    }
  },
  
  error: (...args: any[]) => {
    // 에러는 프로덕션에서도 기록하되, 민감한 정보는 제외
    const sanitizedArgs = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        // 민감한 필드 마스킹
        return maskSensitiveData(arg);
      }
      return arg;
    });
    console.error(...sanitizedArgs);
  },
  
  debug: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(...args);
    }
  }
};

/**
 * 민감한 데이터 마스킹
 */
function maskSensitiveData(obj: any): any {
  const sensitiveKeys = ['password', 'token', 'apiKey', 'secret', 'ssn', 'creditCard'];
  
  if (Array.isArray(obj)) {
    return obj.map(item => maskSensitiveData(item));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const masked: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (sensitiveKeys.some(sk => key.toLowerCase().includes(sk))) {
        masked[key] = '***REDACTED***';
      } else if (typeof value === 'object') {
        masked[key] = maskSensitiveData(value);
      } else {
        masked[key] = value;
      }
    }
    return masked;
  }
  
  return obj;
}

/**
 * 입력값 검증 규칙
 */
export const ValidationRules = {
  surveyTitle: {
    minLength: 1,
    maxLength: 200,
    validate: (value: string) => {
      if (!isValidLength(value, 1, 200)) {
        return '제목은 1-200자 사이여야 합니다.';
      }
      if (containsSqlInjection(value)) {
        return '유효하지 않은 문자가 포함되어 있습니다.';
      }
      return null;
    }
  },
  
  surveyDescription: {
    minLength: 0,
    maxLength: 1000,
    validate: (value: string) => {
      if (value && !isValidLength(value, 0, 1000)) {
        return '설명은 1000자 이하여야 합니다.';
      }
      if (value && containsSqlInjection(value)) {
        return '유효하지 않은 문자가 포함되어 있습니다.';
      }
      return null;
    }
  },
  
  questionTitle: {
    minLength: 1,
    maxLength: 500,
    validate: (value: string) => {
      if (!isValidLength(value, 1, 500)) {
        return '문항 제목은 1-500자 사이여야 합니다.';
      }
      if (containsSqlInjection(value)) {
        return '유효하지 않은 문자가 포함되어 있습니다.';
      }
      return null;
    }
  },
  
  email: {
    validate: (value: string) => {
      if (!isValidEmail(value)) {
        return '유효한 이메일 주소를 입력해주세요.';
      }
      return null;
    }
  },
  
  date: {
    validate: (value: string) => {
      if (!isValidDate(value)) {
        return '유효한 날짜를 입력해주세요. (YYYY-MM-DD)';
      }
      return null;
    }
  }
};

/**
 * Rate Limiting을 위한 간단한 디바운스 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * CSRF 토큰 생성 (클라이언트 사이드)
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
