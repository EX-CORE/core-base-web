import '../style/App.css';
import { Badge } from './ui/badge';

function Home() {
    return (
        <div className="Home">
            {/* TODO 기본 페이지 */}
            <h1 className="font-bold">
            Hello world!
            <Badge variant="outline">배찌</Badge>
            </h1>
        </div>
    );
}

export default Home;
