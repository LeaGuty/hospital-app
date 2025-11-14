function PageSection({ title, subtitle, icon, children }) {
  return (
    <section className="bg-gradient-to-br from-black   via-red-950 to-black rounded-2xl shadow-dark-red border-2 border-hospital-primary p-8 mb-6">
      <div className="border-b border-hospital-secondary pb-4 mb-6">
        <div className="flex items-center gap-3">
          {icon && <span className="text-4xl filter drop-shadow-[0_0_15px_rgba(220,20,60,1)]">{icon}</span>}
          <div>
            <h2 className="text-3xl font-bold text-hospital-secondary horror-text">{title}</h2>
            {subtitle && <p className="text-red-300 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default PageSection