<?php
$dom = new DOMDocument();
$dom->load('data.xml');
$students = $dom->getElementsByTagName('students')->item(0);
?>

<div class="container-fuild">
    <div class="card">
        <div class="card-header">
            <h1>Список пользователей</h1>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr class="row">
                    <th>№</th>
                    <th>Имя и Фамилия</th>
                    <th>номер группы</th>
                    <th>номер ИСУ</th>
                </tr>
                </thead>
                <tbody>
                <?php
                $i = 0;
                $student = $students->getElementsByTagName('student');
                while (is_object($student->item($i++))) {
                    ?>
                    <tr class="row">
                        <td><?php echo $i ?></td>
                        <td><?php echo $student->item($i - 1)->getElementsByTagName('name')->item(0)->nodeValue ?></td>
                        <td><?php echo $student->item($i - 1)->getElementsByTagName('group')->item(0)->nodeValue ?></td>
                        <td><?php echo $student->item($i - 1)->getElementsByTagName('isu')->item(0)->nodeValue ?></td>
                        <td>
                            <a href="index.php?page_layout=update&id=<?php echo $student->item($i - 1)->getElementsByTagName('id')->item(0)->nodeValue; ?>">
                                Изменить</a></td>
                        <td>
                            <a onclick="return Del('<?php echo $student->item($i - 1)->getElementsByTagName('name')->item(0)->nodeValue; ?>',<?php echo $i ?> )"
                               href="index.php?page_layout=delete&id=<?php echo $student->item($i - 1)->getElementsByTagName('id')->item(0)->nodeValue; ?>">Удалить</a>
                        </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            <a href="index.php?page_layout=create" id="add">Добавить</a>
        </div>
    </div>

</div>

<script>
    function Del(name, id) {
        var x = parseInt(id);

        return confirm("Вы уверены что хотите удалить пользователя " +name+ " под номером " + id + " ?");
    }
</script>