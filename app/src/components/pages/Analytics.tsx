import BasicLineChart from '../common/BasicLineChart';
import { emotionsToStressLevels } from '../../utils/mapping';
import { EmotionWord } from '../../utils/mapping';
import { average } from '../../utils/average';


const yEmotions: EmotionWord[] = ['Amusement', 'Amusement', 'Admiration', 'Sympathy', 'Amusement', 'Admiration', 'Sympathy', 'Amusement', 'Admiration', 'Sympathy'];
const stressLevels = emotionsToStressLevels(yEmotions);
const averageStressLevel = average(stressLevels);

function Analytics() {

    return (
        <>
            <h1>You have an average stress level of {averageStressLevel}</h1>
            <div>
                <BasicLineChart xAxisData={Array.from({ length: 61 }, (_, i) => i)} seriesData={stressLevels} />
            </div>
        </>
    );
}
export default Analytics;
