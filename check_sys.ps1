Get-Item C:\hiberfil.sys -Force -ErrorAction SilentlyContinue | Select-Object Name, @{Name='SizeGB';Expression={[math]::Round($_.Length / 1GB, 2)}}
Get-Item C:\pagefile.sys -Force -ErrorAction SilentlyContinue | Select-Object Name, @{Name='SizeGB';Expression={[math]::Round($_.Length / 1GB, 2)}}
