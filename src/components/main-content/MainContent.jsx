import NavButton from "../buttons/Buttons"
import { useState } from 'react';

export default function MainContent() {
    const [appSection, setAppSection] = useState();

    return <div>
        <h2> works</h2>
        {!appSection ? <h1>Select a Section!</h1> : appSection}
        <NavButton onSelect={() => onSelectSection('test')}>Section 1</NavButton>
    </div>
}