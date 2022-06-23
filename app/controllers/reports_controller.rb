include ActiveSupport::NumberHelper

class ReportsController < ApplicationController

  require 'fiddle'
  require 'rjb'
  require 'net/http'
  require 'json'



  classpath = '.'

  Dir["lib/jasper/*.jar"].each do |jar|
    classpath << File::PATH_SEPARATOR + File.expand_path(jar)
  end
  p "------------------------------------------------------------------------------------------------"

  #Rjb::load 'net.sf.jasperreports.engine.JasperCompileManager'
  Rjb::load(classpath, ['-Djava.awt.headless=true', '-Xms128M', '-Xmx256M'])
  Rjb::load 'net.sf.jasperreports.engine.export.JRXlsExporter'
  Rjb::load 'net.sf.jasperreports.engine.export.JRXlsExporterParameter'
  Rjb::load 'net.sf.jasperreports.engine.util.JRStyledTextParser'
  Rjb::load 'net.sf.jasperreports.engine.JRRenderable'
  Rjb::load 'net.sf.jasperreports.extensions.ExtensionsEnvironment'
  Rjb::load 'java.awt.Color'

  JasperCompileManager = Rjb::import 'net.sf.jasperreports.engine.JasperCompileManager'
  JsonDataSource = Rjb::import 'net.sf.jasperreports.engine.data.JsonDataSource'
  JREmptyDataSource = Rjb::import 'net.sf.jasperreports.engine.JREmptyDataSource'
  JasperFillManager = Rjb::import 'net.sf.jasperreports.engine.JasperFillManager'
  JasperExportManager = Rjb::import 'net.sf.jasperreports.engine.JasperExportManager'
  ImageIO = Rjb::import 'javax.imageio.ImageIO'
  HashMap = Rjb::import 'java.util.HashMap'
  FileInputStream = Rjb::import 'java.io.FileInputStream'
  ByteArrayOutputStream = Rjb::import 'java.io.ByteArrayOutputStream'
  ByteArrayInputStream = Rjb::import 'java.io.ByteArrayInputStream'


  def reporte_ejemplo

    parameters = Hash.new
    hash_map = HashMap.new

    user = User.last
    puts "user = #{user.inspect}"
    jasper_report = FileInputStream.new("public/reports/test.jasper")

    parameters = user

    data = parameters.to_json

    file = ByteArrayInputStream.new(data)
    ds = JsonDataSource.new(file)

    output = ByteArrayOutputStream.new

    jasper_print = JasperFillManager.fill_report jasper_report, hash_map, ds

    JasperExportManager.exportReportToPdfStream jasper_print, output

    send_data output.toByteArray,
              filename: "reporte_#{user.last_name}.pdf",
              type: 'application/pdf',
              disposition: 'inline',
              target: '_blank'

  end

  private
  def skip_all_authorization
    skip_authorization
  end


end