import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/graphql";

axios.interceptors.request.use(
	(request) => {
		request.headers["Authorization"] = "token <your token>";
		return request;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default {
	testApi: () => {
		const body = {
			query: 'query {user(login:"xiong35"){contributionsCollection(from:"2020-01-01T17:30:08+08:00"){contributionCalendar{colors weeks{contributionDays{date}}}}}}'
		};
		return axios.post("", body);
	},
	getId: () => {
		return axios.get("https://api.github.com/user");
	},
	repositoryNames: () => {
		const body = {
			query: "query {viewer{repositories(first:50){edges{repository:node{name}}}}}"
		};
		return axios.post("", body);
	},
	search: () => {
		const body = {
			query: 'query {search(query:"vue" type:USER){codeCount discussionCount issueCount}}'
		};
		return axios.post("", body);
	},
	repository: () => {
		const body = {
			query: 'query {repository(name:"shiki" owner:"shikijs"){issue(number:200){body author{avatarUrl login resourcePath url}} languages(last:10){nodes{color name}}}}'
		};
		return axios.post("", body);
	},
	commitComment: () => {
		const body = {
			query: 'query {repository(name:"vue" owner:"vuejs"){commitComments(last:100){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt path resourcePath url}}}}'
		};
		return axios.post("", body);
	},
	issues: () => {
		const body = {
			query: 'query {repository(name:"vue" owner:"vuejs"){issues(states:OPEN){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt resourcePath url}}}}'
		};
		return axios.post("", body);
	},
	commit: () => {
		const body = {
			query: "query {Commit{commitUrl committedDate message messageBody}}"
		};
		return axios.post("", body);
	}
};
