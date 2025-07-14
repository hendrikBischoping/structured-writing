import './SectionNav.css';
import NavButton from '../buttons/Buttons';

export default function SectionNav(props) {
    function handleSelect(buttonContent) {
        // console.log(buttonContent);
        props.onOpenSection(buttonContent);
    }

return <div id="section-nav">
        <NavButton onSelect={() => handleSelect('new-project')}>New Project</NavButton>
        <NavButton onSelect={() => handleSelect('my-projects')}>My Projects</NavButton>
    </div>
}