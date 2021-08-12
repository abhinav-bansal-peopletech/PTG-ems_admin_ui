import ActiveIdleChartComponent from '../../Components/DashboardComponent/ActiveIdleChartComponent'
import FileActivityCahrtComponent from '../../Components/DashboardComponent/FileActivityCahrtComponent'
import ApplicationActivityChartComponent from '../../Components/DashboardComponent/ApplicationActivityChartComponent' 
import TagCloudComponent from '../../Components/DashboardComponent/TagCloudComponent';
import ProfileComponent from '../../Components/DashboardComponent/ProfileComponent';
import { useEffect, useState } from 'react'
import ApiManager from '../../Api/ApiManager'

function Dashboard() {
  const [aiData, setAIData] = useState([])
    const apiGet = () => {
        const request = JSON.stringify({date:"08/07/2021"})
        ApiManager.get("user-report/6/session-data", {params: request }).then((response) => {
            console.log(response.data.data)
            setAIData(response.data.data)
        })
    }
    useEffect(() => {
        console.log("Done")
        apiGet();
    }, []);

  return (
    <>
          <main className="mt-5 pt-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <h6>Dashboard</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card bg-light text-dark h-100">
                    <div className="card-body py-5">
                        <ProfileComponent/>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-primary text-dark mb-3">
                    <div className="card-body py-5">
                        <h5 className="card-title text-center">Productive Time</h5>
                        <p className="card-text text-center">{aiData.activeHoursCountData} Hours</p>
                    </div>
                  </div>

                  <div className="card bg-danger text-dark">
                    <div className="card-body py-5">
                        <h5 className="card-title text-center" >Idle Time</h5>
                        <p className="card-text text-center">{aiData.idleHoursCountData} Hours</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card bg-light text-dark h-100">
                    <div className="card-body py-5">
                        <ActiveIdleChartComponent/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-header">
                      <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                      File Activity Chart
                    </div>
                    <div className="card-body">
                        <FileActivityCahrtComponent/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card h-100">
                    <div className="card-header">
                      <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                      Application Activity Chart
                    </div>
                    <div className="card-body">
                      <ApplicationActivityChartComponent/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="card h-100">
                    <div className="card-header">
                      <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                      Network
                    </div>
                    <div className="card-body">
                        <TagCloudComponent/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
    </>
  );
}

export default Dashboard;