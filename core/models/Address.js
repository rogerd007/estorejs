/**
 * Address is a model for getting address data.
 * @class Address
 * @constructor
 *
 */
module.exports = function Address(store) {

	var t = store.keystone.Field.Types;

	this.NAME = 'Address';
	this.options = {
		hidden: true,
		nocreate: true
	};

	this.fields = [{

			name: {
				type: t.Name,
                                  label:'Name'

			},
				phone: {
				type: t.Text,
				match: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})?[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
				label: 'Phone',

			},
			company: {
				type: String,
                                label:'Company'
			},
			street1: {
				type: t.Text,
				label: 'Street Line1',
				match: /.{1,128}/,
			},
			street2: {
				type: t.Text,
				label: 'Street Line2',
				match: /.{0,128}/,

			},
			code: {

				type: t.Text,
				label: 'Postal Code',
				match: /\w{2,8}/,

			},
			city: {
				type: t.Text,
				label: 'City/Region',
				match: /\w{2,32}/,
			},
                        state: {
                          type: t.Text,
                          label: 'State',
				match: /\w{2,32}/,

                        },
			country: {
				type: t.Text,
				label: 'Country',
				match: /\w{2,32}/,
			}
		}

	];





};
