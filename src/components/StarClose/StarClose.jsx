import bg from '../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/Performance_starRed.png';
import close from '../../assets/images/Resources/RankingChecker/RankingCheckerAfterCheck/Performance_materialSymbolsClose.png';


const StarClose = () => {
    return (
        <div>
            <img src={bg} alt="bg Red" />
            <img className="relative bottom-[55px] -right-5 -mb-[55px]" src={close} alt="close bar" />
        </div>
    );
};

export default StarClose;