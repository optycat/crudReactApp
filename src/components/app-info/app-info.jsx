import './app-info.scss';

const AppInfo = ({ totalEmployees, awardedEmployees }) => {
    return (
        <div className="app-info">
            <h1>Emploeess of company "A-Tech"</h1>
            <h2>{'Amount of emploeess: ' + totalEmployees}</h2>
            <h2>{'Amount of award emploeess: ' + awardedEmployees}</h2>
        </div>
    )
}

export default AppInfo;