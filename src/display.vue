<template>
	<div>{{ calculateAge() }}</div>
</template>

<script>
import { differenceInYears, intervalToDuration, parseISO } from 'date-fns';
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
		show_months: {
			type: Boolean,
			default: false,
		}
	},
	setup(props){
		function calculateAge(){
			if(props.show_months){
				const { years, months } = intervalToDuration({ start: parseISO(props.value), end: new Date()});
				return `${years} years ${months} months`;
			} else {
				const age = differenceInYears(new Date(), parseISO(props.value));
				return `${age} years`;
			}
		}

		return calculateAge;
	},
};
</script>
