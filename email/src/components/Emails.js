import React from 'react';
import "../App.css";
import "./Styles.css";

function Emails() {
    return (
        <div className="emailbody">
            <div>
            <p  className="d-inline mt-3 p-3" id="i1">inbox(16)</p>
            <div  className="input-group d-inline">
                        <input type="text"  className="form-control rounded d-inline w-25" placeholder="Search"
                            aria-label="Search" aria-describedby="search-addon" id='i4' />
                        <button type="button"  className="btn btn-success d-inline" id="i3">search</button>
                    </div>

                    <div>
                        <button type="button"  className="btn btn-outline-secondary d-inline" id="refresh"><i
                                 className="fas fa-sync-alt" ></i>Refresh</button>
                        <button type="button"  className="btn btn-outline-secondary d-inline"><i
                                className="fas fa-eye"></i></button>
                        <button type="button"  className="btn btn-outline-secondary d-inline"><b>!</b></button>
                        <button type="button"  className="btn btn-outline-secondary d-inline"><i
                                 className="far fa-trash-alt"></i></button>
                                
                           
                        <div  className="d-inline " id="i2">
                           
                            <span  > <i className="fas fa-arrow-left " id='la'></i></span>
                            <span  ><i  className="fas fa-arrow-right" id='ra'></i></span>
                        </div>
                    </div>

                   <table className="table table-hover">
                       <tbody>
                       <tr  className="unread">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox" className="mail-checkbox bg-success p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message  dont-show p-1">Anna smith</td>
                                <td  className="view-message p-2">Lorem ipsum dolor noretek imit set.</td>
                                <td  className="view-message  inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message  text-right p-1">6.10 AM</td>
                            </tr>
                            <tr  className="unread">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox" className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i class="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">Jack Nowak <span
                                         className="badge  bg-warning text-dark ms-5">clients</span> </td>
                                <td  className="view-message p-1">Aldus PageMaker including versions of Lorem Ipsum.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">Jan 16</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">Facebook</td>
                                <td  className="view-message p-1">There are many variations of passages of Lorem Ipsum.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">March 15</td>
                            </tr>
                            <tr  className="unread">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">Jack Nowak <span
                                         className="badge  bg-danger text-dark ms-5">Advertising</span> </td>
                                <td  className="view-message p-1">Aldus PageMaker including versions of Lorem Ipsum.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">Jan 16</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">Facebook</td>
                                <td  className="view-message p-1">There are many variations of passages of Lorem Ipsum.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">March 15</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                                <td  className="view-message dont-show p-1">AddMe.com<span
                                         className="badge  bg-success text-dark ms-5">Social</span></td>
                                <td  className="view-message p-1">If you are going to use a passage of Lorem</td>
                                <td className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">August 10</td>
                            </tr>
                           
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox" className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star inbox-started"></i></td>
                                <td  className="view-message dont-show p-1">AddMe.com</td>
                                <td  className="view-message p-1">If you are going to use a passage of Lorem</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">August 10</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  classNames="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i class="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star inbox-started"></i></td>
                                <td  className="view-message dont-show p-1">AddMe.com</td>
                                <td  className="view-message p-1">If you are going to use a passage of Lorem</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">August 10</td>
                            </tr>
                            <tr className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                                <td  className="view-message dont-show p-1">AddMe.com</td>
                                <td  className="view-message p-1">If you are going to use a passage of Lorem</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1 ">August 10</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                                <td  className="view-message dont-show p-1">AddMe.com</td>
                                <td  className="view-message p-1">If you are going to use a passage of Lorem</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1 ">August 10</td>
                            </tr>
                            <tr className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            <tr  className="">
                                <td  className="inbox-small-cells">
                                    <input type="checkbox"  className="mail-checkbox p-1" />
                                </td>
                                <td  className="inbox-small-cells"><i  className="fa fa-star"></i></td>
                                <td  className="view-message dont-show p-1">InternetSeer Website Monitoring</td>
                                <td  className="view-message p-1">Contrary to popular belief.</td>
                                <td  className="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                                <td  className="view-message text-right p-1">July 14</td>
                            </tr>
                            

                       </tbody>
                   </table>

              


            </div>

        </div>
    )
}

export default Emails
