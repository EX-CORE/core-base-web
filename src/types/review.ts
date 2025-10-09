/**
 * 리뷰(설문) 관련 타입 정의
 */
import {Person} from "../pages/review/mockData";

export enum ReviewState {
  READY = "READY",
  PROCESS = "PROCESS",
  STOPPED = "STOPPED",
  DONE = "DONE",
  DELETED = "DELETED",
}

export interface Question {
  id: number;
  type: 'multiple' | 'text' | 'rating';
  title: string;
  description: string;
  options?: string[];
  optionScores?: number[]; // 등급형 문항의 옵션별 점수
  required: boolean;
  sectionId?: number;
  order: number; // 전체 순서
}

export interface Review {
  id: number;
  title: string;
  evaluators: Person[];
  evaluatees: Person[];
  participatedEvaluators: number;
  startDate: string;
  endDate: string;
  createdDate: string;
  state: ReviewState;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  order: number; // 전체 순서
}

export interface ReviewItem {
  id: number;
  type: 'section' | 'question';
  data: Section | Question;
  order: number;
}

export interface RatingConfig {
  options: string[];
  scores: number[];
}

export type EditMode = 'create' | 'edit';
