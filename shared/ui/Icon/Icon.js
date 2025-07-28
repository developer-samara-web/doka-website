import * as IconsOutline from "@heroicons/react/24/outline";
import * as IconsSolid from "@heroicons/react/24/solid";

export default function Icon ({ name, className = "", solid }) {
    const Component = solid ? IconsSolid[name] : IconsOutline[name];

    if (!Component) return null;
    
    return <Component className={className} />
}