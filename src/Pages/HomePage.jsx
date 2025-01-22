import { useFileStore } from "../store/fileStore";
import Form from "../components/Form/Form"
import Notification from "../components/Notification/Notification";
import Preview from "../components/Preview/Preview";
import Modal from "../components/Modal/Modal";
import "./HomePage.css"
import Banner from "../components/Banner/Banner";

function HomePage() {
  const modalStatus = useFileStore(state => state.modalStatus);

  return (
    <div className="page-container">
    <Banner />
    <div className="uploading-container">
    <Form/>
     <Preview/>
     {
        modalStatus && (
        <Modal>
            <Notification/>
        </Modal>
        )
     }

    </div>
     
     
    </div>
  )
}

export default HomePage;
