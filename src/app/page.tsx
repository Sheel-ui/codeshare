import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Home() {
	return (
		<div>
			<div className="flex flex-col items-center pt-16">
				<h1 className="font-bold text-5xl mb-2">
					Share Code with developers⚡️
				</h1>
				<p className="text-grey text-lg w-1/2 text-center m-4">
					Codefile is a collaborative online code editor for technical
					interviews, pair programming, teaching... you name it.
				</p>
				<Link
					href="/code/new"
					className=" mt-4 bg-accent text-white px-6 py-3 rounded-full flex items-center transform transition-transform duration-300 hover:-translate-y-1.5"
				>
					<FontAwesomeIcon icon={faPlus} className="mr-2" />
					New File
				</Link>
				<p className="mt-2 text-grey text-sm">
					No sign up. Free. Forever ❤️
				</p>
			</div>
      <div className="flex flex-col items-center gap-1 mt-12">
        <div className="p-2 text-grey border border-grey-100 rounded-lg w-1/3 flex justify-between items-center">
          <div>
            item1
          </div>
          <div className="text-xs">
            <span className="pr-6 text-green-400"><FontAwesomeIcon icon={faPenToSquare} className="mr-1" />Edit</span>
            <span className="pr-2 text-red-400"><FontAwesomeIcon icon={faTrash} className="mr-1" />Delete</span>
          </div>
        </div>
        <div className="p-2 text-grey border border-grey-100 rounded-lg w-1/3 flex justify-between items-center">
          <div>
            item1
          </div>
          <div className="text-xs">
            <span className="pr-6 text-green-400"><FontAwesomeIcon icon={faPenToSquare} className="mr-1" />Edit</span>
            <span className="pr-2 text-red-400"><FontAwesomeIcon icon={faTrash} className="mr-1" />Delete</span>
          </div>
        </div>
        <div className="p-2 text-grey border border-grey-100 rounded-lg w-1/3 flex justify-between items-center">
          <div>
            item1
          </div>
          <div className="text-xs">
            <span className="pr-6 text-green-400"><FontAwesomeIcon icon={faPenToSquare} className="mr-1" />Edit</span>
            <span className="pr-2 text-red-400"><FontAwesomeIcon icon={faTrash} className="mr-1" />Delete</span>
          </div>
        </div>
        <div className="p-2 text-grey border border-grey-100 rounded-lg w-1/3 flex justify-between items-center">
          <div>
            item1
          </div>
          <div className="text-xs">
            <span className="pr-6 text-green-400"><FontAwesomeIcon icon={faPenToSquare} className="mr-1" />Edit</span>
            <span className="pr-2 text-red-400"><FontAwesomeIcon icon={faTrash} className="mr-1" />Delete</span>
          </div>
        </div>
        <div className="p-2 text-grey border border-grey-100 rounded-lg w-1/3 flex justify-between items-center">
          <div>
            item1
          </div>
          <div className="text-xs">
            <span className="pr-6 text-green-400"><FontAwesomeIcon icon={faPenToSquare} className="mr-1" />Edit</span>
            <span className="pr-2 text-red-400"><FontAwesomeIcon icon={faTrash} className="mr-1" />Delete</span>
          </div>
        </div>
      </div>
		</div>
	);
}
