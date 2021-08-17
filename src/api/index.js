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

const baseRequest = (body) => {
	return axios.post("", body);
};

export default {
	testApi: () => {
		const body = {
			query: 'query {user(login:"xiong35"){contributionsCollection(from:"2020-01-01T17:30:08+08:00"){contributionCalendar{colors weeks{contributionDays{date}}}}}}'
		};
		return baseRequest(body);
	},
	getId: () => {
		return axios.get("https://api.github.com/user");
	},
	repositoryNames: () => {
		const body = {
			query: "query {viewer{repositories(first:50){edges{repository:node{name}}}}}"
		};
		return baseRequest(body);
	},
	search: () => {
		const body = {
			query: 'query {search(query:"vue" type:USER){codeCount discussionCount issueCount}}'
		};
		return baseRequest(body);
	},
	repository: () => {
		const body = {
			query: 'query {repository(name:"shiki" owner:"shikijs"){issue(number:200){body author{avatarUrl login resourcePath url}} languages(last:10){nodes{color name}}}}'
		};
		return baseRequest(body);
	},
	commitComment: () => {
		const body = {
			query: 'query {repository(name:"vue" owner:"vuejs"){commitComments(last:100){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt path resourcePath url}}}}'
		};
		return baseRequest(body);
	},
	issues: () => {
		const body = {
			query: 'query {repository(name:"vue" owner:"vuejs"){issues(states:OPEN){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt resourcePath url}}}}'
		};
		return baseRequest(body);
	},
	commit: () => {
		const body = {
			query: "query {Commit{commitUrl committedDate message messageBody}}"
		};
		return baseRequest(body);
	},
	user: (user) => {
		user = user || "btea";
		const body = {
			query: `query {user(login:"${user}"){avatarUrl bio company createdAt email contributionsCollection{commitContributionsByRepository{contributions(last:20){totalCount nodes{commitCount occurredAt resourcePath url user{avatarUrl bio company createdAt email}}}}} commitComments(last:100){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt path resourcePath url}}}}`
		};
		return baseRequest(body);
	},
	history: () => {
		const body = {
			query: `query {repository(name:"shiki" owner:"shikijs"){defaultBranchRef{name prefix target{abbreviatedOid commitResourcePath commitUrl oid repository{createdAt commitComments(last:100){totalCount nodes{author{avatarUrl login resourcePath url} body createdAt path resourcePath url}}}}}}}`
		};
		return baseRequest(body);
	}
};
