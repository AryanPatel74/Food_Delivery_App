import React, { useEffect, useState } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: { name: "Dummy", location: "Default" },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AryanPatel74");
    const jsonData = await data.json();
    this.setState({
      UserInfo: jsonData,
    });
    console.log(jsonData);
  }
  render() {
    return (
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cdn.statusqueen.com/dpimages/thumbnail/cute_beautiful_dp-927.jpg"
              class="img-fluid rounded-start aboutImg"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.state.UserInfo.name}</h5>
              <p class="card-text">
                <small class="text-muted">Contact: 7985881438</small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Location: {this.state.UserInfo.location}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
