import DisplayComponent from './display.vue';

export default {
	id: 'directus-display-age',
	name: 'Display Age',
	icon: 'calendar_month',
	description: 'Display the current age from the date of birth',
	component: DisplayComponent,
	options: [
		{
			field: 'show_months',
			type: 'boolean',
			name: 'Show Months as well',
			meta: {
				interface: 'boolean',
				options: {
					label: 'Yes',
				},
				width: 'half',
			},
		},
	],
	types: ['date'],
};
