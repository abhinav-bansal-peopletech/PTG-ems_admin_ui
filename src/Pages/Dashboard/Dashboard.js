import './Dashboard.css';
import SideMenuComponent from '../../Components/DashboardComponent/SideMenuComponent';
import HeaderComponent from '../../Components/DashboardComponent/HeaderComponent';
import MainComponent from '../../Components/DashboardComponent/MainComponent';
import ProductiveIdleTimeComponent from '../../Components/DashboardComponent/ProductiveIdleTimeComponent';
import TagCloudComponent from '../../Components/DashboardComponent/TagCloudComponent';

function Dashboard() {
  return (
    <>
          <header><HeaderComponent/></header>
          <nav><SideMenuComponent/></nav>

          <section className="section1">
            <ProductiveIdleTimeComponent/>
          </section>

          <section className="section2">
            <MainComponent/>
          </section>

          <section className="section3">
            <TagCloudComponent/>
          </section>
    </>
  );
}

export default Dashboard;