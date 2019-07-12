import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as RepositoriesActions from "../../Store/Ducks/Repositories/actions";
import { Repository } from "../../Store/Ducks/Repositories/types";
import { ApplicationState } from "../../Store";

interface StateProps {
	repositories: Repository[];
}

interface DispatchProps {
	loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
	componentDidMount() {}

	render() {
		const { repositories } = this.props;

		return <ul>{repositories.map(repository => repository.name)}</ul>;
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(RepositoriesActions, dispatch);


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RepositoryList);
