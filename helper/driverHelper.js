module.exports = {
	distance: (lat1, lng1, lat2, lng2, callback) => {
		let radlat1 = Math.PI * lat1 / 180;
		let radlat2 = Math.PI * lat2 / 180;
		let radlon1 = Math.PI * lng1 / 180;
		let radlon2 = Math.PI * lng2 / 180;
		let theta = lng1 - lng2;
		let radtheta = Math.PI * theta / 180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

		dist = Math.acos(dist);
		dist = dist * 180 / Math.PI;
		dist = dist * 60 * 1.1515;
		
		//Get in in kilometers
		dist = dist * 1.609344;

		callback(dist);
	},
};