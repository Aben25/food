import React from 'react'

function Profile(props) {
    const person = props.profile;
    const id = props.id;
    const deleteFood = props.deleteFood;
    console.log(45545454, props.foods);

 
    return (
        <div className="container">
            <div className="row">
                <div className="col s3 card p-3">
                    <img width="100%" height="80%" src="https://media-exp1.licdn.com/dms/image/C4E03AQEdn795IcRuKw/profile-displayphoto-shrink_200_200/0/1558184743851?e=1632355200&v=beta&t=5mLD1FwPdFVkiXs_whk2A7A1pHzLzjL34koCzApD0Js" />
                    <p>User profile</p>
                    <p>Name: {person.firstName}</p>
                    <p>Eamil: {person.email}</p>
                </div>
                <div className="col s6 ">
                    <div className="row">

                        {props.foods && props.foods.map(food => {
                            console.log(food.authorId);
                            console.log(id);
                            if (food.authorId == id) {
                                return (
                                    <div className="col s3 card p-3">
                                        <img width="100%" height="80%" src={food.url} />
                                        <p></p>
                                        <p>{food.title}</p>
                                        <a onClick = {() =>deleteFood(food.id)} class="btn ">Delete</a>

                                       
                                    </div>
                                )
                            } 

                        })}

                    </div>



                </div>
            </div>
        </div>
    )
}



export default Profile;