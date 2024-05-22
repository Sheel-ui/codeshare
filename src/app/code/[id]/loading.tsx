import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function CodeNotFound() {
    return <div className="text-center pt-8 mt-8 text-xl text-dark">
        <span className="pr-2">Loading <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" /></span>
    </div>
}