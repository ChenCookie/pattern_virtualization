// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 50,
        'width': 50,
        'background-fit': 'cover',
        'border-color': '#2F4F4F',
        'border-width': 2,
		'text-margin-y': -2,
        'border-opacity': 0.5,
		"font-size": "6px",
		"text-valign": "center",
		"text-halign": "center",
		'background-color': '#A9A9A9'
      })
	.selector('node[id]')
      .css({
		'text-wrap': 'wrap',
        'label': 'data(id)',
		"font-size": "12px",
		'text-margin-y': 1
      })
    .selector('.eater')
      .css({
        'border-width': 3
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 4,
        'target-arrow-shape': 'triangle',
        'line-color': '#FFB6C1',
        'target-arrow-color': '#FFB6C1'
      })
    .selector('#617-629,#401-405,#249-259,#530-539')
      .css({
		'background-color': '#ADD8E6'
      })
   .selector('#t1,#t2,#t3,#t4,#t5')
      .css({
		'line-color': 'blue',
      })
   .selector('#preterm')
      .css({
		"font-size": "10px",
		'text-margin-y': 1,
		'label': 'data(label)',
		'background-color': '#ff6666'
      }),

  elements: {
    nodes: [
	  { data: { id: '780-789' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_780-789.html',label:'780-789\nSymptoms'} },
	  { data: { id: '617-629' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_617-629.html',label:'617-629\nOther Disorders Of Female Genital Tract'} },
	  { data: { id: '560-569' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_560-569.html',label:'560-569\nOther Diseases Of Intestines And Peritoneum'} },
      { data: { id: '520-529' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_520-529.html',label:'520-529\nDiseases Of Oral Cavity, Salivary Glands, And Jaws'} },
	  { data: { id: '690-698' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_690-698.html',label:'690-698\nOther Inflammatory Conditions Of Skin And Subcutaneous Tissue'} },
	  { data: { id: '401-405' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_401-405.html',label:'401-405\nHypertensive Disease'} },
      { data: { id: '460-466',label:'460-466\nAcute Respiratory Infections'} },
      { data: { id: '249-259' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_249-259.html',label:'249-259\nDiseases Of Other Endocrine Glands'} },
	  { data: { id: '640-649' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_640-649.html',label:'640-649\nComplications Mainly Related To Pregnancy' } },
	  { data: { id: '090-099',label:'090-099\nSyphilis And Other Venereal Diseases'} },
	  { data: { id: '650-659',label:'650-659\nNormal Delivery, And Other Indications For Care In Pregnancy, Labor, And Delivery'} },
	  { data: { id: '660-669',label:'660-669\nComplications Occurring Mainly In The Course Of Labor And Delivery'} },
	  { data: { id: '530-539',label:'530-539\nDiseases Of Esophagus, Stomach, And Duodenum'} },
	  { data: { id: '630-639',label:'630-639\nEctopic And Molar Pregnancy And Other Pregnancy With Abortive Outcome'} },
	  { data: { id: '555-558',label:'555-558\nNoninfective Enteritis And Colitis'} },
	  { data: { id: '210-229',label:'210-229\nBenign Neoplasms'} },
	  { data: { id: '614-616',label:'614-616\nInflammatory Disease Of Female Pelvic Organs'} },
	  { data: { id: '110-118',label:'110-118\nMycoses'} },
      { data: { id: 'preterm',label:'Premature\nDelivery'} }
    ],
    edges: [
	  { data: { source: '401-405', target: '460-466'}},  
	  { data: { source: '210-229', target: '401-405'}},
	  { data: { source: '110-118', target: '401-405'}},
	  { data: { source: '780-789', target: '640-649'}},
	  { data: { source: '780-789', target: '460-466'}},
	  { data: { source: '780-789', target: '617-629'}},
	  { data: { source: '780-789', target: '614-616'}},
	  { data: { source: '780-789', target: '560-569'}},  
	  { data: { source: '780-789', target: '090-099'}},
	  { data: { source: '780-789', target: '690-698'}},	
	  { data: {id: 't3', source: '780-789', target: 'preterm'}},
	  { data: { source: '780-789', target: '401-405'}},
	  { data: { source: '660-669', target: '650-659'}},
	  { data: { source: '560-569', target: '401-405'}},
	  { data: { source: '401-405', target: 'preterm'}},
	  { data: { source: '401-405', target: '780-789'}},
	  { data: { source: '401-405', target: '650-659'}},
	  { data: { source: '401-405', target: '640-649'}},
	  { data: { source: '090-099', target: '650-659'}},
	  { data: { source: '650-659', target: 'preterm'}},
	  { data: {id: 't1', source: '640-649', target: 'preterm'}},
	  { data: { source: '640-649', target: '401-405'}},
	  { data: { source: '640-649', target: '650-659'}},
	  { data: {id: 't4', source: '460-466', target: '640-649'}},
	  { data: { source: '460-466', target: '660-669'}},
	  { data: { source: '460-466', target: '617-629'}},
	  { data: { source: '460-466', target: '520-529'}},
	  { data: { source: '460-466', target: '401-405'}},
	  { data: { source: '460-466', target: '560-569'}},
	  { data: {id: 't2', source: '460-466', target: 'preterm'}},
	  { data: { source: '460-466', target: '690-698'}},	
	  { data: { source: '460-466', target: '090-099'}},
	  { data: { source: '460-466', target: '555-558'}},
	  { data: { source: '460-466', target: '780-789'}},
	  { data: { source: '530-539', target: '640-649'}},
	  { data: { source: '530-539', target: '650-659'}},
	  { data: { source: '520-529', target: '617-629'}},
	  { data: { source: '520-529', target: '650-659'}},
	  { data: { source: '520-529', target: '401-405'}},
	  { data: { source: '630-639', target: '401-405'}},
	  { data: { source: '555-558', target: '401-405'}},
	  { data: { source: '690-698', target: '640-649'}},
	  { data: { source: '690-698', target: '401-405'}},
	  { data: { source: '249-259', target: '640-649'}},	
	  { data: { source: '249-259', target: '520-529'}},
	  { data: { source: '249-259', target: '401-405'}},
	  { data: { source: '614-616', target: '640-649'}},
	  { data: { source: '614-616', target: '401-405'}},
	  { data: { source: '617-629', target: '401-405'}},
	  { data: { source: '617-629', target: '090-099'}},
	  { data: { source: '617-629', target: '690-698'}},
	  { data: {id: 't5', source: '617-629', target: '640-649'}},
	  { data: { source: '617-629', target: '650-659'}},
	  { data: { source: '617-629', target: '560-569'}},
	  { data: { source: '617-629', target: '460-466'}},
	  { data: { source: '617-629', target: '780-789'}},
	  { data: { source: '617-629', target: '520-529'}}	  

    ]
  },

  layout: {
   name: 'dagre',
   rankDir: 'LR',
    directed: true,
    padding: 10
  }
}); // cy init

cy.$('#780-789').position({
  x: (cy.extent().x1)+50,
  y: (cy.extent().y2/2)
});

cy.$('#preterm').position({
  x: (cy.extent().x2)-50,
  y: (cy.extent().y2/2)
});

cy.on('tap', 'node', function(){
  var nodes = this;
  var tapped = nodes;
  var last=[];
  cy.nodes().classes();
  nodes.addClass('eater');
  try { 
	if(typeof this.data('href')!== 'undefined'){
		window.open( this.data('href') );
	}
 } catch(e){ 
    window.location.href = this.data('href');
 }


}); // on tap

cy.on('mouseover', 'node', function(evt){
  var nodes = this;
  cy.$(this).style('label',nodes.data('label') );

}); // on tap

cy.on('mouseout', 'node', function(){
  var nodes = this;
  if(nodes.data('id')!=='preterm'){
	 cy.$(this).style('label',nodes.data('id') );
  }

}); // on tap
