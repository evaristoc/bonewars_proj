import { defineField, defineType } from 'sanity';

export const slidesMapDinowars = defineType({
      name: 'someArrayField',
    //   options: {
    //     disableActions: ['add', 'duplicate'],
    //   },
      title: "Content Array",
	  type: 'document',
	  fields:
	  [
		defineField({name:'arrayname', title:'A name', type: 'array', of: [
				{
				type: 'mapDinowars',
				},
			]})]
    })