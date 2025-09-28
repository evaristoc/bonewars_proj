import { defineField, defineType } from 'sanity';

export const mapDinowars = defineType({
	name: 'mapDinowars',
	title: 'Content Map Dinowars',
	type: 'document',
	fields: [
		defineField({name:'classname', title: 'Class Name', type: 'string'}),
		defineField({name:'location', title: 'Location', type: 'geopoint'}),
		defineField({name:'title', title: 'Title', type: 'string'}),
		defineField({name:'label', title: 'Label', type: 'string'}),
		defineField({name:'content', title: 'Content', type: 'array', of:[{type:"block"}]}),
		defineField({name:'image', title: 'Image', type: 'image', options:{hotspot:true}})
	]
})

