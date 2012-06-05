// Extensions
(function( undefined ){
	wrap.fn.prepend = function( frag ){
		if( typeof( frag ) === "string" || frag.nodeType !== undefined ){
			frag = wrap( frag );
		}
		return this.each(function( i ){
			
			for( var j = 0, jl = frag.length; j < jl; j++ ){
				var insertEl = i > 0 ? frag[ j ].cloneNode( true ) : frag[ j ];
				if ( this.firstChild ){
					this.insertBefore( insertEl, this.firstChild );
				}
				else {
					this.appendChild( insertEl );
				}
			}
		});
	};
	
	wrap.fn.prependTo = function( sel ){
		return this.each(function(){
			wrap( sel ).prepend( this );
		});
	};
}());