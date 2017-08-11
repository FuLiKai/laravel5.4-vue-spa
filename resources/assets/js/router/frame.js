import Company from '../components/company/Company';
import Option from '../components/option/Option';
import Exercise from '../components/option/Exercise';
import UserInfo from '../components/user/UserInfo';
import UserData from '../components/user/UserData';
import BankCard from '../components/user/BankCard';
import RmbWithDraw from '../components/assetManage/RmbWithDraw';
import DigitalWithDraw from '../components/assetManage/DigitalWithDraw';
import RmbRecharge from '../components/assetStatistics/RmbRecharge';
import RmbStatistics from '../components/assetStatistics/RmbStatistics';
import DigitalRecharge from '../components/assetStatistics/DigitalRecharge';
import DigitalStatistics from '../components/assetStatistics/DigitalStatistics';
import StockList from '../components/assetStatistics/StockList';
import StockStatistics from '../components/assetStatistics/StockStatistics';
import Roles from '../components/account/Roles';
import Accounts from '../components/account/Accounts';

const childRoutes = [
    {
        path: 'company',
        component: Company
    },
    {
        path: 'option',
        component: Option
    },
    {
        path: 'exercise',
        component: Exercise
    },
    {
        path: 'userInfo',
        component: UserInfo
    },
    {
        path: 'userData',
        component: UserData
    },
    {
        path: 'bankCard',
        component: BankCard
    },
    {
        path: 'rmbWithDraw',
        component: RmbWithDraw
    },
    {
        path: 'digitalWithDraw',
        component: DigitalWithDraw
    },
    {
        path: 'rmbRecharge',
        component: RmbRecharge
    },
    {
        path: 'rmbStatistics',
        component: RmbStatistics
    },
    {
        path: 'digitalRecharge',
        component: DigitalRecharge
    },
    {
        path: 'digitalStatistics',
        component: DigitalStatistics
    },
    {
        path: 'stockList',
        component: StockList
    },
    {
        path: 'stockStatistics',
        component: StockStatistics
    },
    {
        path: 'roles',
        component: Roles
    },
    {
        path: 'accounts',
        component: Accounts
    }
];

export default childRoutes;