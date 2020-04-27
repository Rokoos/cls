import React from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { Modal, Button } from "semantic-ui-react";
import Spinner from "./Spinner";
import { startFetchProject } from "../actions";

class Heniek extends React.Component {
  state = {
    open: true,
    dimmer: true,
  };

  componentDidMount() {
    this.props.startFetchProject(this.props.match.params.id);
  }

  // show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => {
    this.setState({ open: false });
    this.props.history.push("/");
  };

  render() {
    const { open, dimmer } = this.state;

    return (
      <div className="modal-box">
        <Modal dimmer={dimmer} open={open}>
          <Modal.Content>
            {!this.props.project ? (
              <Spinner />
            ) : (
              <Project project={this.props.project} />
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.close}>
              OK
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  project: state.projects.project,
});
export default connect(mapStateToProps, { startFetchProject })(Heniek);
