$startFolder = 'C:\Users\anura'
$folders = Get-ChildItem -Path $startFolder -Directory -Force -ErrorAction SilentlyContinue
$result = foreach ($folder in $folders) {
    $size = (Get-ChildItem -Path $folder.FullName -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
    if ($size) {
        [PSCustomObject]@{
            Name = $folder.Name
            SizeGB = [math]::Round($size / 1GB, 2)
        }
    }
}
$result | Sort-Object SizeGB -Descending | Select-Object -First 10
