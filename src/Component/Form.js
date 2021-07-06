import * as React from "react"
import Img from './Image.js'

class Form extends React.Component {
    state = {
        WW: 0,
        HH: 0,
        LL: 0,
        show: false
    }
    showimg = () => {

        if (this.state.WW > 0 && this.state.HH > 0 && this.state.LL > 0) {
            this.setState({ show: true },()=>{
                this.download();
            });
        } else {
            alert("All field must be greater than zero!")
        }
    }
    download = () => {
        var svg = document.getElementById("Laer_1");
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svg);

        if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
        }
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
        var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
        document.getElementById("link").href = url;
        
    }
    render() {
        return (
            <>
                <div>
                    <h4 style={{ textAlign: "center" }}>Box Measurement</h4>
                </div>
                <div className="col-12" style={{ marginTop: 20 }}>
                    <div className="row">
                        <div className="col-3">
                            <div>
                                <div className="form-group">
                                    <label>Box Width(mm)</label>
                                    <input type="number" className="form-control" onChange={(e) => { this.setState({ WW: e.target.value,show:false }) }} value={this.state.WW} />
                                </div>
                                <div className="form-group">
                                    <label>Box Height(mm)</label>
                                    <input type="number" className="form-control" onChange={(e) => { this.setState({ HH: e.target.value,show:false }) }} value={this.state.HH} />
                                </div>
                                <div className="form-group">
                                    <label>Box Length(mm)</label>
                                    <input type="number" className="form-control" onChange={(e) => { this.setState({ LL: e.target.value,show:false }) }} value={this.state.LL} />
                                </div>
                                <button className="btn btn-info" onClick={() => { this.showimg() }}>Calculate</button>
                            </div>
                        </div>
                        <div className="col-9">
                            {this.state.show == true ?
                                <div style={{ height: 800, width: 800 }}>
                                    <Img WW={this.state.WW*3.7795275591} LL={this.state.LL*3.7795275591} HH={this.state.HH*3.7795275591} />                                   
                                    <a id="link" download>download</a>
                                </div>
                                : <></>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Form;