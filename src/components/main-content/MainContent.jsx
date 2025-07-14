import './MainContent.css';

export default function MainContent(props) {
    
    return <div id="main-content">
        {/* <h2 id="main-content-hl">This is the main content!</h2> */}
        <h2 id="main-content-hl">{props.children}</h2>
    </div>
}