import React, {Component} from 'react';
import './fonter.css';

export default class Fonter extends Component{
    constructor(props){
		super(props)
		this.state = {
			fonts: ["academy engraved let",
                "algerian",
                "amaze",
                "arial",
                "arial black",
                "balthazar",
                "bankgothic lt bt",
                "bart",
                "bimini",
                "book antiqua",
                "bookman old style",
                "braggadocio",
                "britannic bold",
                "brush script mt",
                "calibri",
                "cambria",
                "candara",
                "century gothic",
                "century schoolbook",
                "chasm",
                "chicago",
                "colonna mt",
                "comic sans ms",
                "commercialscript bt",
                "consolas",
                "constantia",
                "coolsville",
                "corbel",
                "courier",
                "courier new",
                "cursive",
                "dayton",
                "desdemona",
                "estrangelo edessa",
                "fantasy",
                "flat brush",
                "footlight mt light",
                "franklin gothic medium",
                "futurablack bt",
                "futuralight bt",
                "gabriola",
                "garamond",
                "gautami",
                "gaze",
                "geneva",
                "georgia",
                "georgia italic impact",
                "geotype tt",
                "helterskelter",
                "helvetica",
                "herman",
                "highlight let",
                "impact",
                "jester",
                "joan",
                "john handy let",
                "jokerman let",
                "kelt",
                "kids",
                "kino mt",
                "la bamba let",
                "latha",
                "lithograph",
                "lucida console",
                "lucida sans console",
                "lucida sans unicode",
                "map symbols",
                "marlett",
                "matteroffact",
                "matisse itc",
                "matura mt script capitals",
                "mekanik let",
                "modern",
                "modern ms sans serif",
                "monaco",
                "monospace",
                "monotype sorts",
                "ms linedraw",
                "ms sans serif",
                "ms serif",
                "mv boli",
                "new york",
                "nyala",
                "olddreadfulno7 bt",
                "orange let",
                "palatino",
                "palatino linotype",
                "playbill",
                "pump demi bold let",
                "puppylike",
                "roland",
                "roman",
                "sans-serif",
                "script",
                "scripts",
                "scruff let",
                "segoe print",
                "segoe script",
                "segoe ui",
                "serif",
                "short hand",
                "signs normal",
                "simplex",
                "simpson",
                "small fonts",
                "stylus bt",
                "superfrench",
                "surfer",
                "swis721 bt",
                "swis721 blkoul bt",
                "symap",
                "tahoma",
                "technic",
                "tempus sans itc",
                "terk",
                "times",
                "times new roman",
                "trebuchet ms",
                "trendy",
                "txt",
                "tunga",
                "verdana",
                "victorian let",
                "vineta bt",
                "vivian",
                "western",
                "westminster",
                "westwood let",
                "wide latin",
                "zapfellipt bt"],
		}
    }
    handleChange(e){
        const value = e.target.value;
        document.getElementsByTagName('body')[0].style.fontFamily = e.target.value;
        document.getElementsByTagName('button')[0].style.fontFamily = e.target.value;
        document.getElementsByClassName('contacts_submit')[0].style.fontFamily = e.target.value;
        console.log(value);
    }
    list(){
        return this.state.fonts.map((item, index) => 
            <option value={ item }
                    key={ index }>
                { item }
            </option>)
	}
	render(){
		return (
			<div className="fonter">
                <select onChange={e => this.handleChange(e)}> 
                    { this.list() }
                </select>
            </div>
		)
	}
}
