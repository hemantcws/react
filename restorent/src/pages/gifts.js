import React,{useState,useEffect} from "react";
import data from "../components/data.json";
import defaultimg from '../images/1.png';

const Gifts = () => {
	const [itemsToDisplay, setItemsToDisplay] = useState([]);
	const [itemsToUse, setItemsToUse] = useState([]);
	const [cuisines, setCuisines] = useState([]);
	useEffect(() =>{
		var cuisines = [];
		var ItemsToDisplay = [];
		for (var i = 0; i < data.length; i++) {
		  ItemsToDisplay.push(data[i]);
		  data[i]["Categories"].substring(1, data[i]["Categories"].length - 2)
			.split(",")
			.forEach(cuisine => {
			  let c = cuisine.substring(1, cuisine.length - 1);
			  c = c.includes("'") ? c.substring(1, c.length) : c;
			  if (cuisines.indexOf(c) < 0) {
				cuisines.push(c);
			  }
			});
		}

		setCuisines( cuisines );
		setItemsToDisplay( ItemsToDisplay );
		setItemsToUse( ItemsToDisplay );
		
	},[]);
	
	
	const filterOnSearch = event => {
    if (
      !event.target.value ||
      event.target.value === " " ||
      event.target.value === ""
    )
      setItemsToDisplay( [itemsToUse] );
    else {
      let ItemsToDisplay = [];
      ItemsToDisplay = itemsToUse.filter(
        item =>
          item["Name"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["Categories"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["City"].toLowerCase().includes(event.target.value.toLowerCase())
      );
      setItemsToDisplay( ItemsToDisplay );
    }
  };

  const optionSelected = () => {
    var e = document.getElementById("restfilter");
    var selected = e.options[e.selectedIndex].text;

    if (selected === "Choose Any")
      setItemsToDisplay(itemsToUse);
    else {
      let ItemsToDisplay = [];
	  
      ItemsToDisplay = itemsToUse.filter(item =>
        item["Categories"].toLowerCase().includes(selected.toLowerCase())
      );
      setItemsToDisplay( ItemsToDisplay );
    }
  };
	
	
	
  return (
    <div className="App">
		<div className="container">
        <div className="row">
        <div className="col-md-3">
            Choose a Category : &nbsp;
            <select id="restfilter" onChange={optionSelected}>
              <option value="any">Choose Any</option>
              {cuisines.map(cuisine => {
                return <option value={cuisine}>{cuisine}</option>;
              })}
            </select>
        </div>
        <div className="col-md-9">
        <div className="row">
          {itemsToDisplay.map(rest => {
            let cuisines = rest["Categories"]
              .substring(1, rest["Categories"].length - 2)
              .split(",");
            return (
				<div className="col-md-4 main_list_div">
					<div className="restinfo">
						<img src={defaultimg} className="list-img" alt="" />
						<span className="restname"><strong>Name: </strong>{rest["Name"]}</span>
						<span className="restcity"><strong>City: </strong>{rest["City"]}</span>
						<div className="restcuisines"><strong>Categories: </strong>
						{cuisines.map(cuisine => { let cuisineToShow = cuisine.substring(1, cuisine.length - 1);
						cuisineToShow = cuisineToShow.includes("'") ? cuisineToShow.substring(1, cuisineToShow.length) : cuisineToShow;
						return (
							<span className="cat-list">{cuisineToShow},</span>
						);
						})}
						</div>
						<div className="reststats">
							<div className="reviews"><strong>Reviews: </strong>{rest["Number of Reviews"]}</div>
							<div className="rating"><strong>Rating: </strong>{rest["Rating"]}</div>
						</div>
					</div>
				</div>
            );
          })}
        </div>
        </div>
        </div>
		</div>
    </div>
  );
};
  
export default Gifts;