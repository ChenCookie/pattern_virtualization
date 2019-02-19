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
	.selector('edge[label]')
      .css({
        'label': 'data(label)',
		"font-size": "10px",
		'text-margin-y': -4,
		'width': 3,
		'edge-text-rotation': 'autorotate'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 4,
        'target-arrow-shape': 'triangle',
        'line-color': '#FFB6C1',
        'target-arrow-color': '#FFB6C1'
      })
    .selector('#617-629')
      .css({
		'background-color': '#ADD8E6'
      })
  .selector('#401-405')
      .css({
		'background-color': '#ADD8E6'
      })
  .selector('#249-259')
      .css({
		'background-color': '#ADD8E6'
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
      { data: { id: 'preterm',label:'Premature\nDelivery'} }
    ],
    edges: [
	  { data: { source: '780-789', target: '617-629' , label: '137.1'}},
	  { data: { source: '617-629', target: '690-698' , label: '169.2'}},
	  { data: { source: '690-698', target: '401-405' , label: '143.8'}},
	  { data: { source: '401-405', target: '460-466' , label: '116'}},
	  { data: { source: '460-466', target: '401-405' , label: '207.4'}},
	  { data: { source: '401-405', target: '640-649' , label: '126.5'}},
	  { data: { source: '640-649', target: '401-405' , label: '99.7'}},
	  { data: { source: '401-405', target: '650-659' , label: '170.6'}},
	  { data: { source: '650-659', target: 'preterm' , label: '62.2'}},
	  { data: { source: '617-629', target: '460-466' , label: '124'}},
	  { data: { source: '460-466', target: '640-649' , label: '195.1'}},
	  { data: { source: '460-466', target: 'preterm' , label: '267.1'}},
	  { data: { source: '460-466', target: '690-698' , label: '185.9'}},
	  { data: { source: '640-649', target: 'preterm' , label: '121.8'}},	  
	  { data: { source: '249-259', target: '520-529' , label: '114.9'}},
	  { data: { source: '249-259', target: '401-405' , label: '223.3'}},
	  { data: { source: '520-529', target: '650-659' , label: '241.4'}},
	  { data: { source: '780-789', target: '560-569' , label: '141'}},
	  { data: { source: '560-569', target: '401-405' , label: '147'}},
	  { data: { source: '401-405', target: 'preterm' , label: '81.3'}},	  
	  { data: { source: '780-789', target: '090-099' , label: '151'}},
	  { data: { source: '780-789', target: '690-698' , label: '190.7'}},
	  { data: { source: '090-099', target: '650-659' , label: '176.9'}},	  
	  { data: { source: '617-629', target: '401-405' , label: '145.3'}},
	  { data: { source: '617-629', target: '560-569' , label: '171'}},
	  { data: { source: '617-629', target: '640-649' , label: '149.1'}},
	  { data: { source: '617-629', target: '650-659' , label: '178'}},
	  { data: { source: '617-629', target: '520-529' , label: '144.7'}}	  

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

console.log(cy.extent(),cy.width());
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

cy.on('mouseover', 'node', function(){
  var nodes = this;
  cy.$(this).style('label',nodes.data('label') );
}); // on tap

cy.on('mouseout', 'node', function(){
  var nodes = this;
  if(nodes.data('id')!=='preterm'){
	 cy.$(this).style('label',nodes.data('id') );
  }

}); // on tap
