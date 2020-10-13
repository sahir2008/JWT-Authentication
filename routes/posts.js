const router = require("express").Router();
const verfiy = require("./verfiyToken");

router.get("/", verfiy, (req, res) => {
    res.json({
        posts: {
            title: "MyPost",
            content: "Random data you shouldn't access if you dont have token"
        }
    });
});






module.exports = router;