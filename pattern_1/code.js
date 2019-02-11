// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 25,
        'width': 25,
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
        'label': 'data(id)',
		"font-size": "5px",
		'text-margin-y': -3
      })
    .selector('.eater')
      .css({
        'border-width': 3
      })
	.selector('edge[label]')
      .css({
        'label': 'data(label)',
		"font-size": "5px",
		'text-margin-y': -4,
		'width': 3,
		'edge-text-rotation': 'autorotate'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 3,
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
      }),

  elements: {
    nodes: [
      { data: { id: '780-789' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_780-789.html'} },
      { data: { id: '617-629' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_617-629.html'} },
      { data: { id: '640-649' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_640-649.html'} },
      { data: { id: '690-698' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_690-698.html'} },
      { data: { id: '401-405' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_401-405.html'} },
      { data: { id: '249-259' , href: 'https://chencookie.github.io/ICD_gene/mid%20index/ICD_249-259.html'} },
      { data: { id: '650-659' } },
      { data: { id: 'preterm'} }
    ],
    edges: [
      { data: { source: '780-789', target: '617-629' , label: '137.5(1328/27401)'}},
      { data: { source: '617-629', target: '640-649' , label: '120.9(3466/60958)'}},
      { data: { source: '617-629', target: '401-405' , label: '180.7(149/610)'}},
      { data: { source: '617-629', target: '690-698' , label: '169.2(1037/19806)'}},
	  { data: { source: '640-649', target: '401-405' , label: '99.7(107/449)'}},
	  { data: { source: '690-698', target: '401-405' , label: '135.5(57/267)'}},
	  { data: { source: '401-405', target: 'preterm' , label: '89.8(229/1045)'}},
	  { data: { source: '401-405', target: '650-659' , label: '117.9(52/198)'}},
	  { data: { source: '249-259', target: '401-405' , label: '223.3(31/?)'}},
      { data: { source: '650-659', target: 'preterm' , label: '37.3(1777/22631)'}}
    ]
  },

  layout: {
   name: 'dagre',
   rankDir: 'LR',
    directed: true,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function(){
  var nodes = this;
  var tapped = nodes;
  var last=[];
  cy.nodes().classes();
  nodes.addClass('eater');
  try { // your browser may block popups
	if(typeof this.data('href')!== 'undefined'){
		window.open( this.data('href') );
	}
  } catch(e){ // fall back on url change
    window.location.href = this.data('href');
  }

  for(;;){
    var connectedEdges = nodes.connectedEdges(function(el){
		
      return !el.target().anySame( nodes );
    });

    var connectedNodes = connectedEdges.targets();
    nodes = connectedNodes;
	

    if( nodes.empty() ){ break; }

  }



}); // on tap
