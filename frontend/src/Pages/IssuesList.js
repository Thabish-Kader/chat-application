import React, { useState, useEffect } from "react";
import "../styles/issuesList.css";
import { SingleIssue } from "../components/SingleIssue";
import { getDocs, collection } from "firebase/firestore";
import axios from "axios";
import { db } from "../config/firebase";

export const IssuesList = () => {
	const issuesRef = collection(db, "issues");
	const [issuesList, setIssuesList] = useState([]);

	const [search, setSearch] = useState("");

	const getIssues = async () => {
		const data = await getDocs(issuesRef);
		setIssuesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};

	useEffect(() => {
		getIssues();
	}, [issuesList]);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filterSearch = issuesList.filter((data) =>
		data.Title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="issueList-container">
			<div className="search-component">
				<h1 className="issue-text">Search Issues</h1>
				<form>
					<input
						type="text"
						className="search-issue"
						placeholder="Search"
						onChange={handleChange}
					/>
				</form>
			</div>
			<div className="singleIssue-container">
				<div className="issueList-row">
					<div className="user">
						<h1 className="username-text">Username</h1>
					</div>
					<div className="issue-data">
						<p className="issue-title">Title</p>
						<p className="issue-description">Description</p>
						<p className="issue-priority">Priority</p>
					</div>
					<div className="issueList-btns"></div>
				</div>
			</div>
			{filterSearch?.map((data) => (
				<SingleIssue key={data.id} data={data} />
			))}
		</div>
	);
};
