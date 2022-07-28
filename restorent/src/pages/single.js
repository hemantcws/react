import React from "react";
import data from "../components/data.js";
import { Link } from "react-router-dom";

const Single = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const itemdata = data.filter(item => item["Id"] == id );
	const rest = itemdata[0];

	return (

	<div className="App about">    
		<div className="container">
			<div className="row">
				<div class="Gift_list">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><Link to="/gifts">Gifts</Link></li>
							<li class="breadcrumb-item active" aria-current="page">{rest["Name"]}</li>
						</ol>
					</nav>
				</div>
				<section className="img_sec">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img_sec2">
									<img src={rest["Image"]} />
								</div>
							</div>
							<div className="col-md-6">
								<div className="text_sec">
									<h1>{rest["Name"]}</h1>
									<p>{rest["Description"]}</p> 
								</div>
								<div className="list_sec">
									<ul>
										<li>
											<span><i class="fa fa-users" aria-hidden="true"></i></span>
											{rest["People"]} {rest["People"] == '1'? " person": " people" }
										</li>
										<li>
											<span><i class="fa fa-list-alt" aria-hidden="true"></i></span>25 Options
										</li>
									</ul>
								</div>
								<div className="clender_sec">
									<p>
										<span><i class="fa fa-calendar" aria-hidden="true"></i></span>Valid for {rest["Duration"]} months since purchase
									</p>
								</div>
								<div class="doller_main">
									<div class="text_dollor">
										<h3><span>$</span>{rest["Price"]}</h3>
									</div>
									<div class="addcart_btn">
										<Link to="">Add To Cart</Link>
									</div>
									<div class="heart_shape">
										<span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="dessert_tab">
					<div className="container"> 
						<div className="row">
							<h1 className="ex_text">Experiences</h1>
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                   
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
									</div>
								</div>
							</div>
						</div>
						<div className="row dessert_2">
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<img src="http://cloudwebsolutions.net:3000/static/media/gift2.299dc2f29ad4c1ff4495.png" class="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Lorem Ipsum</h5>
										<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
    </div>
    );

};
  
export default Single;