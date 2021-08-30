import React from 'react'

import "../App.css";
import "./Styles.css"

function Compose() {

    
    return (
        <div className="Compose">

            <button type="button" class="btn btn-success btn-lg"
                data-bs-toggle="modal" data-bs-target="#compose" id="cmp">Compose</button>
            <p><b>FOLDERS</b></p>
            <ul className="c-item">
                <li><i class="fas fa-inbox p-2"></i>Inbox</li>
                <li><i class="far fa-envelope p-2"></i>Send mail</li>
                <li><i class="fas fa-certificate p-2"></i>Important</li>
                <li><i class="far fa-file-alt p-2"></i>Drafts</li>
                <li><i class="far fa-trash-alt p-2"></i>Trash</li>

            </ul>
            <p><b>CATEGORIES</b></p>
            <ul className="c-item">
                <li><i class="fas fa-circle me-2" id="f1"></i>Work</li>
                <li><i class="fas fa-circle me-2" id="f2"></i>Documents</li>
                <li><i class="fas fa-circle me-2" id="f3"></i>Social</li>
                <li><i class="fas fa-circle me-2" id="f4"></i>Advertising</li>
                <li><i class="fas fa-circle me-2" id="f5"></i>Clinets</li>

            </ul>

            <p><b>LABLES</b></p>
            <div className="lables">
                <button type="button" class="btn btn-outline-secondary m-1" id="h1"><i
                    class="fas fa-tag "></i>Family</button>
                <button type="button" class="btn btn-outline-secondary m-1" id="h2"><i
                    class="fas fa-tag "></i>work</button>

                <button type="button" class="btn btn-outline-secondary m-1" id="h4"><i
                    class="fas fa-tag "></i>children</button>
                <button type="button" class="btn btn-outline-secondary m-1" id="h5"><i
                    class="fas fa-tag "></i>holidays</button>

                <button type="button" class="btn btn-outline-secondary m-1" id="h7"><i
                    class="fas fa-tag"></i>photography</button>
                <button type="button" class="btn btn-outline-secondary m-1" id="h8"><i
                    class="fas fa-tag "></i>Film</button>
                <button type="button" class="btn btn-outline-secondary m-1" id="h3"><i
                    class="fas fa-tag "></i>home</button>
                <button type="button" class="btn btn-outline-secondary m-1 " id="h6"><i
                    class="fas fa-tag "></i>Music</button><br></br>

            </div>
           

            
            <div class="modal fade" id="compose" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="mail">New Mail</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="form">
                        <div class="form-group row">
                            <label for="to" class="col-2 col-form-label p-3">To</label>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="enter mail id" id="to"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="to" class="col-2 col-form-label p-3">CC</label>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="enter mail id" id="cc"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="to" class="col-2 col-form-label p-3">BCC</label>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="enter mail id" id="bcc"/>
                            </div>
                        </div>


                        <div class="button-group d-inline" id="icons">
                            <button class="btn btn-default"><span class="fa fa-bold"></span></button>
                            <button class="btn btn-default"><span class="fa fa-italic"></span></button>
                            <button class="btn btn-default"><span class="fa fa-underline"></span></button>
                            <button class="btn btn-default"><span class="fa fa-align-left"></span></button>
                            <button class="btn btn-default"><span class="fa fa-align-right"></span></button>
                            <button class="btn btn-default"><span class="fa fa-align-center"></span></button>
                            <button class="btn btn-default"><span class="fa fa-align-justify"></span></button>
                            <button class="btn btn-default"><span class="fa fa-indent"></span></button>
                            <button class="btn btn-default"><span class="fa fa-outdent"></span></button>
                            <button class="btn btn-default"><span class="fa fa-list-ul"></span></button>

                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" id="msg" rows="8"
                                placeholder="Click here to reply"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal" id="send" >Send</button>
                            <button type="button" class="btn btn-secondary">Draft</button>
                            <button type="button" class="btn btn-danger dismiss">Discord</button>
                     
                        </div>
                    </form>

                </div>
            
            </div>

        
    </div>
    </div>
            





</div>
)
}
export default Compose
