const ClientLogos = () => {
  const clients = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png"
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to work with some of the world's most innovative companies
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10"></div>
          
          {/* Scrolling Logos */}
          <div className="flex animate-scroll">
            {/* First Set */}
            <div className="flex items-center space-x-16 px-8">
              {clients.map((client, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center space-x-16 px-8">
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 group">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Global Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ClientLogos;