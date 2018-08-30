import React ,{Component} from 'react';

export default class FooterAbout extends Component{
    render (){
        return (
                <div className="footerMenu">
                        <ul>
                            <li className="d-inline-block">Terms of use </li>
                            <li className="d-inline-block">Privacy Policy </li>
                            <li className="d-inline-block">Support </li>
                            <li className="d-inline-block">Community Guidelines     </li>
                            <li className="d-inline-block last-li">Sitemap port</li>
                        </ul>
                </div>
        );
    }
}