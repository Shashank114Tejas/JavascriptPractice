
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],
	videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------


function video() {
    newReleases.forEach((val) => {
        videoAndTitlePairs.push({ id: val.id, title: val.title })
    })

    return videoAndTitlePairs;

}

// newReleases.forEach(function(video) {
//     videoAndTitlePairs.push({ id: video.id, title: video.title });
// });

video();
console.log(videoAndTitlePairs);


//filter unique elements
const nums = [5, 6, 1, 2, 3, 4, 5, 6]
const unique = nums.filter((val, ind, self) => self.indexOf(val) == ind)
console.log(unique.sort((a, b) => a - b));

//only unshift unique elements
function unshiftUnique(arr,...elements) {
    elements.forEach((element) => {
        if (!arr.includes(element)) {
           arr.push(element)
       }
    })
}
unshiftUnique(nums, 12, 12, 11, 5, 6)
console.log(nums);