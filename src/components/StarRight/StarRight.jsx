import bg from '../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/Performance/StarBlue.png';
import right from '../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/Performance/Right.png';


const StarRight = () => {
    return (
        <div>
            <img src={bg} alt="bg" />
            <img className="relative bottom-[50px] -right-5 -mb-[46px]" src={right} alt="right bar" />
        </div>
    );
};

export default StarRight;