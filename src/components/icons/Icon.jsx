import IconBack from "./Back";
import IconChevron from "./Chevron";
import IconMoon from "./Moon";
import IconSearch from "./Search";

const Icon = ({name}) => {
    switch (name) {
        case 'Back':
            return <IconBack/>
        case 'Moon':
            return <IconMoon/>
        case 'Search':
            return <IconSearch/>
        case 'Chevron':
            return <IconChevron/>
        default:
            return ''
    }
}

export default Icon