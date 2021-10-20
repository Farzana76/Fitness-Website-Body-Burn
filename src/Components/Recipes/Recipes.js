import React from 'react';
import './Recipes.css';
import img1 from '../../img/f1.jpg';
import img2 from '../../img/f2.jpg';
import img3 from '../../img/f3.jpg';
import img4 from '../../img/f4.png';
import img5 from '../../img/f5.jpg';
import img6 from '../../img/f6.jpg';



const Recipes = () => {
    return (
        <div className="bg">
            <h1 className="heading mt-3 mb-3">Special diet recipes for you!</h1>
            <div className="row mb-4">
                <div className="col-7">
                    <img src={img1} alt="" className="w-100"/>
                </div>
                <div className="col-5 bg-light">
                    <h1 className="display-5">Pan-Fried Tilapia</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary text-left">
                        In a large bowl, whisk together flour, garlic powder, onion powder, chili powder, and cumin. Whisk to combine.<br></br>
                        Season tilapia filets generously with salt and pepper, then dip each in flour mixture, shaking off any excess flour. Place on a clean plate or baking sheet.
                        In a large, nonstick skillet over medium heat, heat oil. Add 2 filets and cook 3 to 4 minutes per side, until crust is golden and fish flakes easily with a fork. Repeat with remaining filets.<br></br>
                        Serve immediately with cilantro and lime wedges.
                    </h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-5 bg-light text-left">
                    <h1 className="display-5">Caprese Zoodles</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary">
                        Using a spiralizer, create zoodles out of zucchini.<br></br>
                        Add zoodles to a large bowl, toss with olive oil and season with salt and pepper. Let marinate 15 minutes.<br></br>
                        Add tomatoes, mozzarella and basil to zoodles and toss until combined.
                        Drizzle with balsamic and serve.
                    </h4>
                </div>
                <div className="col-7">
                    <img src={img2} alt="" className="w-100"/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-7">
                    <img src={img3} alt="" className="w-100"/>
                </div>
                <div className="col-5 bg-light">
                    <h1 className="display-5">Italian Sausage Stuffed Zucchini</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary">
                        Preheat oven to 350 degrees F. Score zucchini (like you’re dicing an avocado) and scoop out insides into a large bowl.<br></br>
                        In a large skillet over medium heat, heat oil. Add chicken sausage and cook until seared, 6 minutes.<br></br>
                        Transfer to a large bowl and add breadcrumbs, 1/2 cup mozzarella, fontina, garlic, and basil.<br></br>
                        Spoon mixture into zucchini and top with remaining 1/4 cup mozzarella.<br></br>
                        Bake until zucchini is tender and cheese golden, 15 minutes.
                    </h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-5 bg-light">
                    <h1 className="display-5">Best Baked Catfish</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary">
                        Preheat oven to 425° and drizzle 2 tablespoons oil on a large baking sheet. On a large plate, combine cornmeal and Cajun seasoning. Season catfish with salt and pepper, then dredge fish in seasoned cornmeal, pressing to coat. 
                        Place fish on prepared baking sheet and drizzle with remaining 2 tablespoons oil. Bake until golden and fish flakes easily with a fork, 15 minutes. Serve with lemon wedges.
                    </h4>
                </div>
                <div className="col-7">
                    <img src={img4} alt="" className="w-100"/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-7">
                    <img src={img5} alt="" className="w-100"/>
                </div>
                <div className="col-5 bg-light">
                    <h1 className="display-5">Stuffed Cabbage Rolls</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary">
                        Preheat oven to 350°. In a large deep skillet (or large pot) over medium heat, heat oil. Add onion and cook until soft, 5 minutes. Stir in tomato paste and garlic and cook until fragrant, 1 minute. Pour over tomatoes then add vinegar, sugar, and oregano. 
                        Lower heat to medium-low and simmer for 20 minutes. Season with salt and pepper.
                    </h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-5 bg-light">
                    <h1 className="display-5">Chicken Parm Stuffed Peppers</h1>
                    <h3>Directions</h3>
                    <h4 className="p-2 text-secondary">
                        Preheat oven to 400º. In a large bowl, combine 2 cups mozzarella, Parmesan, garlic, marinara, parsley, and red pepper flakes and season with salt and pepper. Stir until combined, then gently fold in chicken.
                        Spoon mixture into halved bell peppers and sprinkle with remaining 1 cup mozzarella.
                        Pour chicken broth into baking dish (to help the peppers steam) and cover with foil.
                    </h4>
                </div>
                <div className="col-7">
                    <img src={img6} alt="" className="w-100"/>
                </div>
            </div>
        </div>
           
    );
};

export default Recipes;