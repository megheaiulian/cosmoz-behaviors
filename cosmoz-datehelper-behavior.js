/*global Cosmoz, moment */
(function () {

	'use strict';
	window.Cosmoz = window.Cosmoz || {};

	/** @polymerBehavior */
	Cosmoz.DateHelperBehavior = {

		isoDate: function (date) {
			var time = date && moment(date);
			return time && time.isValid() && time.format('YYYY-MM-DD') || '';
		},

		isoDT: function (date) {
			var time = date && moment(date);
			return time && time.isValid() && time.format('YYYY-MM-DD HH:mm:ss') || '';
		},

		/**
		 * Check if date is in the past
		 * @param  {date/string} date Date to check
		 * @return {boolean} In the past?
		 */
		pastDate: function (date) {
			var time = date && moment(date);
			return time && time.isValid() && time.isBefore(new Date());

		},
		/**
		 * Get human readable string describing date's difference from now
		 * @param  {date} date Date to check
		 * @return {String}   Date representation string
		 */
		timeago: function (date) {
			var time = date && moment(date);
			return time && time.isValid() && time.fromNow() || '';
		},
		renderDate: function (date) {
			return this.isoDate(date);
		},
		renderDatetime: function (date) {
			return this.isoDT(date);
		},

		ensureDate: function (date) {
			var ensuredDate;
			if (date === undefined) {
				return;
			}
			if (date instanceof Date) {
				return date;
			}
			try {
				ensuredDate = new Date(date);
			} catch (err) {
				return;
			}
			return ensuredDate;
		},

		dayDiff: function (date1, date2) {
			var time1 = moment(date1),
				time2 = moment(date2);
			if (time1.isValid() && time2.isValid()) {
				return time1.diff(time2, 'days');
			}
			return '';
		}
	};

}());
