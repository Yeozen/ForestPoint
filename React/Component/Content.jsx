import './Content.css'

function Content(){
    return(
        <body>
            <ul className='textvid'>
        <div className='PRCNN'>
            <ul style={{padding: '0%'}}>
            <h1>A Tree Instances Segmentation Engine based on PointRCNN.<div className='blink'>|</div></h1>
            <h3>We have trained a deep learning model called PointForest using transfer learning, which can perform tree segmentation in 3D point cloud space. The PCD Data Library is a directory used to manage all the point cloud data for processing.</h3>
            <div className='FileBar'><input type="file" id="file" ></input><button>Process</button></div>
            </ul>
        </div>
        <div className='videoPCRNN'>
            <video controls={false} source src="src/assets/Tvid.mp4" loop={true} autoPlay muted type='video/mp4'></video>
        </div>
        </ul>
        </body>
    )
 
}

export default Content;