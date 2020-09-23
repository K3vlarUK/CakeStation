import React from 'react';

const CakeForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const cake = {
            "name": event.target.cakeName.value,
            "comment": event.target.comment.value,
            "url": event.target.url.value,
            "yumfactor": event.target.yumFactor.value
        }
        props.handleCakePost(cake);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Cake Name" name="cakeName"/>
                <input type="text" placeholder="Add a Comment" name="comment"/>
                <input type="url" placeholder="Url of cake image" name="url"/>
                <label for="yumFactor">The Yum Factor(between 0 and 10)</label>
                <input type="range" min="0" max="10" id="yumFactor" name="yumFactor" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
 
export default CakeForm;